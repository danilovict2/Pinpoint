<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class GameController extends AbstractController
{
    #[Route('/play', name: 'game_play')]
    public function play(): Response
    {
        return $this->render('game/index.html.twig');
    }

    #[Route('/test-map')]
    public function testMap(): Response
    {
        return $this->render('game/map.html.twig');
    }

    #[Route('/reverse-geocode', name: 'game_reverse_geocode', methods: ['POST'])]
    public function reverseGeocode(
        #[Autowire("%env(EXO_API_KEY)%")] string $apiKey,
        HttpClientInterface $client,
        Request $request
    ): Response
    {
        $lat = $request->query->get('lat');
        $lng = $request->query->get('lng');

        $response = $client->request('POST', 'https://api.exoapi.dev/reverse-geocoding', [
            'auth_bearer' => $apiKey,
            'headers' => [
                'content_type' => 'application/json'
            ],
            'body' => ['lat' => $lat, 'lon' => $lng, 'locale' => 'en-GB']
        ]);

        return new Response($response->getContent());
    }
}
