let phrases = [
    "Alguns momentos passam voando, mas deixam marcas que ficam pra sempre.",
    "Tem lembranças que moram na alma, não importa quanto tempo passe.",
    "Não são os dias que lembramos, mas os sentimentos que eles despertaram.",
    "Certas memórias são como abraços que o tempo não consegue desfazer.",
    "A beleza da vida está nos instantes simples que tocam o coração.",
    "Tem lembranças que são como músicas: basta uma nota pra reviver tudo.",
    "As memórias mais bonitas são feitas com sorrisos sinceros e olhares cúmplices.",
    "O tempo passa, mas o que foi vivido com amor permanece eterno.",
    "Entre um riso e outro, nascem as memórias que levamos pra vida toda.",
    "Momentos especiais não têm hora marcada, eles simplesmente acontecem.",
    "Cada memória carrega um pedaço daquilo que fomos e do que ainda somos.",
    "As pequenas alegrias do dia a dia são os verdadeiros tesouros da vida.",
    "Vivemos momentos que talvez nunca voltem, mas que sempre farão parte de nós.",
    "As lembranças mais fortes são aquelas que tocam o coração sem avisar.",
    "Sorrisos sinceros constroem memórias eternas.",
    "Cada instante vivido com verdade se transforma em lembrança eterna.",
    "Às vezes, um olhar diz mais que mil palavras e marca pra sempre.",
    "O valor de um momento só é compreendido quando ele vira saudade.",
    "O tempo voa, mas a emoção de certos dias permanece intacta.",
    "A vida não avisa quando está criando uma memória inesquecível."
];
let currentIdx = -1;

function showRandomPhrase() {
    const wrapper = document.getElementById('phrasePopupWrapper');
    const text = document.getElementById('phraseText');
    if (phrases.length === 0) {
        text.textContent = "Nenhuma frase disponível.";
        wrapper.classList.add('active');
        return;
    }
    let idx;
    do {
        idx = Math.floor(Math.random() * phrases.length);
    } while (phrases.length > 1 && idx === currentIdx);
    currentIdx = idx;
    text.textContent = phrases[idx];
    wrapper.classList.add('active');
    // Restart popup animation
    const popup = document.getElementById('phrasePopup');
    popup.style.animation = 'none';
    void popup.offsetWidth;
    popup.style.animation = 'popupAscend 0.5s cubic-bezier(.4,1.4,.6,1)';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('showPhraseBtn').addEventListener('click', function() {
        showRandomPhrase();
    });

    document.getElementById('phrasePopupWrapper').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });

    document.getElementById('closePhrasePopup').addEventListener('click', function() {
        document.getElementById('phrasePopupWrapper').classList.remove('active');
    });
});
