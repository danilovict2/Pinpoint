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
    public function play(Request $request): Response
    {
        return $this->render('game/index.html.twig', ['mode' => $request->query->getString('mode')]);
    }

    #[Route('/test-map')]
    public function testMap(): Response
    {
        return $this->render('game/map.html.twig');
    }
}
