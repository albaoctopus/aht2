import { useState, useEffect } from "react";



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Новый уровень взаимодействия!", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 5);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      
              <div>
                <h1 className="my-5 text-red-700 text-center font-extrabold text-6xl">ACA DIGITAL</h1>
                <h1 className="mb-8 font-extrabold text-5xl">{`ПРЕДСТАВЛЯЕТ:`} <span className="text-center font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>dssnln klklknl lknlknln llklkl lklapojvp pji oijo  khbjhb llkkjbkbk kjbkjbkjbk kjbkjkb kjbkjkb xt ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  
              </div>
          
    </section>
  )
}