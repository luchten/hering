const carouselInner = document.querySelectorAll('.carousel-inner p');
const buttonPrev = document.getElementById('prev');
const buttonNext = document.getElementById('next');
const buttonCategoriaInput = document.querySelectorAll('.categoria-row input');
const buttonGeneroInput = document.querySelectorAll('.genero-row input');
const buttonCategoriaSpan = document.getElementById('toggle-categoria');
const buttonGeneroSpan = document.getElementById('toggle-genero');
const buttonCategoriaLimpar = document.getElementById('categoria-limpar');
const buttonGeneroLimpar = document.getElementById('genero-limpar');
const ordenarATag = document.querySelector('#ordenar a');
const ordenarDiv = document.querySelector('ul.ordenar-por');
var count = 0;
var categoriaCount = 0;
var generoCount = 0;

buttonPrev.addEventListener('click', () => {
    if (count == 0) {
        carouselInner[count].classList.remove('p-active');
        count = 2;
        carouselInner[count].classList.add('p-active');
        return;
    }
    carouselInner[count].classList.remove('p-active');
    count--;
    carouselInner[count].classList.add('p-active');
    return;
});

buttonNext.addEventListener('click', () => {
    if (count == 2) {
        carouselInner[count].classList.remove('p-active');
        count = 0;
        carouselInner[count].classList.add('p-active');
        return;
    }
    carouselInner[count].classList.remove('p-active');
    count++;
    carouselInner[count].classList.add('p-active');
});

for (var i = 0; i < buttonCategoriaInput.length; i++) {
    buttonCategoriaInput[i].addEventListener('click', toggleCategoria)
}

for (var i = 0; i < buttonGeneroInput.length; i++) {
    buttonGeneroInput[i].addEventListener('click', toggleGenero)
}

buttonCategoriaLimpar.addEventListener('click', () => {
    categoriaCount = 1;
    toggleCategoria();
    for (var i = 0; i < buttonCategoriaInput.length; i++) {
        buttonCategoriaInput[i].checked = false;
    }
})

buttonGeneroLimpar.addEventListener('click', () => {
    generoCount = 1;
    toggleGenero();
    for (var i = 0; i < buttonGeneroInput.length; i++) {
        buttonGeneroInput[i].checked = false;
    }
})

function toggleCategoria() {
    if (this.checked) {
        categoriaCount++;
        buttonCategoriaSpan.textContent = ' ( ' + categoriaCount + ' ) ';        
    } else {
        categoriaCount--;
        if (categoriaCount == 0) {
            buttonCategoriaSpan.textContent = '';
        } else {
            buttonCategoriaSpan.textContent = ' ( ' + categoriaCount + ' ) ';
        }        
    }
}

function toggleGenero() {
    if (this.checked) {
        generoCount++;
        buttonGeneroSpan.textContent = ' ( ' + generoCount + ' ) ';        
    } else {
        generoCount--;
        if (generoCount == 0) {
            buttonGeneroSpan.textContent = '';
        } else {
            buttonGeneroSpan.textContent = ' ( ' + generoCount + ' ) ';
        }        
    }
}

ordenarATag.addEventListener('click', () => {
    ordenarDiv.classList.toggle('ordenar-active');
})