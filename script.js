function encryptText() {
    var inputText = document.getElementById('input-text').value;
    var outputText = '';

    // Lógica para criptografar o texto
    for (var i = 0; i < inputText.length; i++) {
        var char = inputText[i];
        switch (char) {
            case 'e':
                outputText += 'enter';
                break;
            case 'i':
                outputText += 'imes';
                break;
            case 'a':
                outputText += 'ai';
                break;
            case 'o':
                outputText += 'ober';
                break;
            case 'u':
                outputText += 'ufat';
                break;
            default:
                outputText += char;
        }
    }

    // Exibe o texto criptografado no textarea de saída
    document.getElementById('output-text').value = outputText;

    // Mostra o botão de copiar
    document.getElementById('copy-button').style.display = 'block';
}

function decryptText() {
    var inputText = document.getElementById('input-text').value;
    var outputText = '';

    // Lógica para descriptografar o texto
    outputText = inputText.replaceAll('enter', 'e')
                          .replaceAll('imes', 'i')
                          .replaceAll('ai', 'a')
                          .replaceAll('ober', 'o')
                          .replaceAll('ufat', 'u');

    // Exibe o texto descriptografado no textarea de saída
    document.getElementById('output-text').value = outputText;

    // Mostra o botão de copiar
    document.getElementById('copy-button').style.display = 'block';
}

function copyText() {
    var outputText = document.getElementById('output-text').value;
    navigator.clipboard.writeText(outputText)
        .then(function() {
            alert('Texto Copiado com Sucesso!');
        })
        .catch(function(error) {
            console.error('Erro ao copiar o texto:', error);
            alert('Erro ao copiar o texto. Por favor, tente novamente.');
        });
}



// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"