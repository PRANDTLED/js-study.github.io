function myFunction() {
    /* Находим текстовое поле */
    let copyText = document.getElementById("myInput");

    /* Выбираем текстовое поле */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* Для мобильных устройств */

    /* Копируем текст из текстового поля */
    navigator.clipboard.writeText(copyText.value);

    /* Выводим скопированный текст в диалоговом окне */
    alert("Скопированный текст: " + copyText.value);
}