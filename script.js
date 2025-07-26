const carta = document.getElementById('carta');
const papel = document.getElementById('papel');
const musica = document.getElementById('musica');

let aberta = false;

carta.addEventListener('click', () => {
  if (aberta) return;

  aberta = true;


  carta.src = 'open.gif';
  carta.style.transform = 'scale(1.1)';

  setTimeout(() => {
    papel.style.transform = 'translate(-50%, -50%) translateY(0)';
    papel.style.opacity = '1';


    mensagem.innerText = `Wow… almost 10 years of UNDERTALE, huh?

This game completely changed my life. Before it, I was just a lost kid — and afterward… I was still a lost kid, but now with a hyperfixation on yellow non-binary children, murderous talking flowers, and skeletons wearing sandals of an undetermined color!

I know you don’t know me (and honestly, I don’t know much about you beyond the “annoying dog”), but I felt like I needed to write this anyway.

Thank you so much!

You made this poor girl (who didn’t even know she was a girl back then) feel a little less alone. Because of you, she made friends. Because of you, she had fun. And in some way… because of you, she’s still here today.

She might’ve never gotten into creating things if it weren’t for all the thousands of AUs your game inspired.

Honestly, she might not even know how to use a computer properly if it weren’t for UNDERTALE.

So thank you, Mr. Toby Fox — and thank you to everyone who was involved in the creation of this game.

There’s no way to put everything I feel into words… so I put it on a weird animated website instead.  
I guess that’s kinda your fault too, hehe.`;

    musica.play();
  }, 500);
});
