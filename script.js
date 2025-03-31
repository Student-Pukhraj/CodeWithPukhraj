
    const words = [
        "C Programming", 
        "Python", 
        "C++", 
        "Java", 
        "DSA", 
        "Machine Learning", 
        "Data Science", 
        "Web Development"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    const speed = 30; 
    const eraseSpeed = 50; 
    const delayBetweenWords = 1000; 
    const textElement = document.getElementById("text");

    function typeWords() {
        textElement.style.color = "#7e22ce";
        if (letterIndex < words[wordIndex].length) {
            textElement.innerHTML += words[wordIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(typeWords, speed);
        } else {
            setTimeout(eraseWords, delayBetweenWords);
        }
    }

    function eraseWords() {
        if (letterIndex > 0) {
            textElement.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(eraseWords, eraseSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length; 
            setTimeout(typeWords, speed);
        }
    }

    
    typeWords();

    const brandText = "CodeWithPukhraj";
    let brandIndex = 0;
    const brandSpeed = 30; 
    const brandElement = document.getElementById("brand");

    function typeBrand() {
        if (brandIndex < brandText.length) {
            brandElement.innerHTML += brandText.charAt(brandIndex);
            brandIndex++;
            setTimeout(typeBrand, brandSpeed);
        }
    }

    
    typeBrand();

    