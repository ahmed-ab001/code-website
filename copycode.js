
document.getElementById("copyBtn").addEventListener("click", function() {
    const code = document.getElementById("codeBlock").innerText;

    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = code;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    const toast = document.getElementById("toast");
    const copyText = document.getElementById("copyText");
    const copyIcon = document.getElementById("copyIcon");

    copyText.textContent = "Copied!";
    copyIcon.className = "check-icon";
    toast.classList.add("show");

    setTimeout(() => {
        copyText.textContent = "Copy Code";
        copyIcon.className = "copy-icon";
        toast.classList.remove("show");
    }, 1500);
});
