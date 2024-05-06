<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class NominatumAPIController extends AbstractController
{
    public function __construct(private HttpClientInterface $client)
    {
    }

    #[Route('/reverse', name: 'reverse')]
    public function reverse(Request $request): Response
    {
        $lat = $request->query->get('lat');
        $lng = $request->query->get('lng');

        $response = $this->client->request('GET', 'https://nominatim.openstreetmap.org/reverse', [
            'query' => [
                'lat' => $lat,
                'lon' => $lng,
                'format' => 'json',
                'accept-language' => 'en-US'
            ]
        ]);

        return new Response($response->getContent());
    }
}
