"use strict";
// LOCAL STORAGE
// localStorage.setItem("nombre","juan");
// console.log(localStorage.getItem("NOMBRE"));
// setTimeout(() => localStorage.clear(), 2000);

const html = document.querySelector('.html');
const idioma = document.querySelector('.idioma');
const body = document.querySelector('.body');
const boton = document.querySelector('.confirmar');
const select = document.querySelector('.idioma_select');
const titulo = document.querySelector('.texto_title');
const art1Titulo = document.querySelector('.title1');
const art2Titulo = document.querySelector('.title2');
const art3Titulo = document.querySelector('.title3');
const art1P = document.querySelector('.para1');
const art2P = document.querySelector('.para2');
const art3P = document.querySelector('.para3');
const botonIdioma = document.querySelector('.idioma_switch');

boton.addEventListener('click',()=>{
    if(select.value == 'espaniol'){
        localStorage.setItem('idioma','espaniol');
        html.setAttribute('lang','es');
        cambiarIdioma(select.value);
    }
    else if(select.value == 'ingles'){
        localStorage.setItem('idioma','ingles');
        html.setAttribute('lang','en');
        cambiarIdioma(select.value);
    }
    else if(select.value == 'japones'){
        localStorage.setItem('idioma','japones');
        html.setAttribute('lang','ja');
        cambiarIdioma(select.value); 
    }
    idioma.style.display = 'none';
    body.style.overflowY = 'scroll';
});

botonIdioma.addEventListener('click', ()=>{
    idioma.style.display = 'flex';
    body.style.overflowY = 'hidden';
})

const cambiarIdioma = (idioma)=>{
    if(idioma == 'ingles'){
        body.style.fontFamily = ' "Tiro Telugu", serif';
        botonIdioma.textContent = 'Change language';
        titulo.textContent = 'Welcome to my blog!';

        art1Titulo.textContent = 'Crazy and fun stuff you can read here';
        art2Titulo.textContent = 'Are we really living in a simulation?';
        art3Titulo.textContent = 'Poppies, and what they really mean for the world';

        art1P.textContent = 'The pain itself is important to the core elite of adipisicadores. To get that hard work, which is sure to be the result of all these products! He hates the pleasures of knowing that the pain he has chosen is the same. But the sage, what services do we accuse of these? The pleasures of truth loved or accepted prevent him from becoming the most worthy of these pains, and as nothing shuns the so-called pleasures that often fall into freedom, he is bound to forgive his pain, and every choice may be rebuked by him. same. mistake. When we follow the distinction between pleasure and pleasure from our trades, do we consider it pleasant to admirers? The child that is born avoids pleasures that are said to be similarly fulfilled. You owe him a lot, but the very things you have some right to!';
        art2P.textContent = 'The pain itself is important to the core elite of adipisicadores. Above all for right and for that, or even for the pleasure of the pleasure builder! The pain of the chosen truth, therefore the advantage, the great one, when the needs are released, will that man come to accuse us of the flattery of the present? It was only with him! Because we rightly accuse him that the elect abandon their offices, and it will happen that he was never born with sorrows, which they say are greater, because the most worthy pleasures have to be repudiated by the work of corrupted reason, and be rejected by the wise. They do not know how they abandon their present detached acts, or accuse those who reject the truth, for which some righteous but less! And any of his works, nor is he often subject to reason, who, by what means does he love, and whom does he love, and that he does not do it for right or advantage, but for reason? Often this error can result in the choice of pain and therefore the distinction between pain and pain arises from the type of problems that occur to us, while, blinded by physical labor, no one has a reason to seek the services of the Body. We accuse of repudiating any of the necessities and pleasures of our present jobs, and not of life itself, which and of them. The sage is born to accuse us of anything corrupt, he is obliged to be avoided, and therefore free from the free forecast of the truth, but that other great option of the blessed will allow us to enjoy all the pleasures that we, the advantageous ones, obtain. , and the consequences, hate. The sage undertakes to carry on the affairs of the one whom he is obliged to open by right of great pleasure, because no guilt of his accusers will open his pain. Please, let us be blinded by some, or we are simply accusing you of the pain for being angry with her, who accepts any pain as the main source of pleasure, and who hates the need to reject their forgiveness. Who is to suppose that those whom no one dislikes for their flattery, choose the effeminacy of these lasting pleasures, do not know how to fulfill their duties with just pleasure, or it is pain, often great? It flatters us as much as pain itself, pain that hates to follow any of our words. Nobody accepts a mistake? Pleasures and dislikes will occur when you fall into the softness of those elections, which, so to speak, are the most demanding elections during the great season, and if they give us the services of work, this is the least pleasure of all. of the pain itself!';
        art3P.textContent = 'The pain itself is important to the core elite of adipisicadores. Above all for right and for that, or even for the pleasure of the pleasure builder! The pain of the chosen truth, therefore the advantage, the great one, when the needs are released, will that man come to accuse us of the flattery of the present? It was only with him! Because we rightly accuse him that the elect abandon their offices, and it will happen that he was never born with sorrows, which they say are greater, because the most worthy pleasures have to be repudiated by the work of corrupted reason, and be rejected by the wise. They do not know how they abandon their present detached acts, or accuse those who reject the truth, for which some righteous but less! And any of his works, nor is he often subject to reason, who, by what means does he love, and whom does he love, and that he does not do it for right or advantage, but for reason? Often this error can result in the choice of pain and therefore the distinction between pain and pain arises from the type of problems that occur to us, while, blinded by physical labor, no one has a reason to seek the services of the Body. We accuse of repudiating any of the necessities and pleasures of our present jobs, and not of life itself, which and of them. The sage is born to accuse us of anything corrupt, he is obliged to be avoided, and therefore free from the free forecast of the truth, but that other great option of the blessed will allow us to enjoy all the pleasures that we, the advantageous ones, obtain. , and the consequences, hate. The sage undertakes to carry on the affairs of the one whom he is obliged to open by right of great pleasure, because no guilt of his accusers will open his pain. Please, let us be blinded by some, or we are simply accusing you of the pain for being angry with her, who accepts any pain as the main source of pleasure, and who hates the need to reject their forgiveness.';

    }
    else if(idioma == 'espaniol'){
        body.style.fontFamily = ' "Tiro Telugu", serif';
        botonIdioma.textContent = 'Cambiar idioma';
        titulo.textContent = 'Bienvenido a mi blog!';

        art1Titulo.textContent = 'Cosas locas y divertidas que podras leer aqui';
        art2Titulo.textContent = 'Realmente vivimos en una simulacion?';
        art3Titulo.textContent = 'Las amapolas y lo que realmente significan para el mundo';

        art1P.textContent = 'El dolor en sí mismo es importante para la élite principal de adipisicadores. ¡Para obtener ese arduo trabajo, que seguramente será el resultado de todos estos productos! Odia los placeres de saber que el dolor que ha elegido es el mismo. Pero el sabio, ¿de qué servicios acusamos de estos? Los placeres de la verdad amados o aceptados le impiden llegar a ser el más digno de estos dolores, y como nada rehuye los llamados placeres que a menudo caen en la libertad, está obligado a perdonar su dolor, y toda elección puede ser reprendida por el mismo. error. Cuando seguimos la distinción entre placer y placer desde nuestros oficios, ¿lo consideramos agradable a los admiradores? El niño que nace evita los placeres que se dice que se cumplen de manera similar. ¡Le debes mucho, pero las mismas cosas a las que tienes algún derecho!';
        art2P.textContent = 'El dolor en sí mismo es importante para la élite principal de adipisicadores. ¡Sobre todo por derecho y por eso, o incluso por el placer del constructor de placeres! El dolor de la verdad escogida, por lo tanto la ventaja, la grande, cuando las necesidades sean liberadas, ¿llegará ese hombre a acusarnos de la adulación del presente? ¡Fue sólo con él! Porque con razón le acusamos de que los elegidos abandonan sus oficios, y acontecerá que nunca nació con penas, que dicen ser mayores, porque los placeres más dignos han de ser repudiados por el trabajo de la razón corrompida, y ser rechazado por el sabio. ¡No saben cómo abandonan sus presentes actos desapegados, o acusan a los que rechazan la verdad, por lo cual algunos justos pero menos! ¿Y cualquiera de sus trabajos, ni muchas veces está sujeto a la razón, quién, por qué medios ama, y ​​a quién ama, y ​​que no lo hace por derecho o ventaja, sino por la razón? A menudo, este error puede resultar en la elección del dolor y, por lo tanto, la distinción entre dolor y dolor surge del tipo de problemas que nos ocurren, mientras que, cegados por el trabajo físico, nadie tiene razón para buscar los servicios del cuerpo. Acusamos de repudiar cualquiera de las necesidades y placeres de nuestros trabajos presentes, y no de la vida misma, cual y de ellos. El sabio nace para acusarnos de nada corrompido, está obligado a ser evitado, y por tanto libre de la previsión libre de la verdad, pero esa otra gran opción de los bienaventurados nos permitirá gozar de todos los placeres que nosotros, los las ventajosas, obtener, y las consecuencias, odiar. El sabio se compromete a llevar adelante los asuntos de aquel a quien está obligado a abrir por derecho de gran placer, porque ninguna culpa de sus acusadores abrirá su dolor. Por favor, dejémonos cegar por algunos, o simplemente te estamos acusando del dolor por el enfado con ella, que acepta cualquier dolor como principal fuente de placer, y que odia la necesidad de rechazar el perdón de estos. ¿Quién ha de suponer que aquellos a quienes nadie desagrada por sus halagos, elige el afeminamiento de estos placeres perdurables, no saben cumplir sus deberes con justo placer, o es dolor, muchas veces grande? Nos halaga tanto como el dolor mismo, el dolor que odia seguir cualquiera de nuestras palabras. ¿Nadie acepta un error? Placeres y disgustos ocurrirán cuando caigan en la blandura de esas elecciones, que, por así decirlo, son las elecciones más exigentes durante la gran temporada, y si nos brindan los servicios del trabajo, este es el menor placer de todo. del dolor mismo! Nadie está acusando a todos. La distinción es un ejercicio de elección de la vida como acusadores. Explique los placeres totales del cuerpo tanto como sea posible. ¡Algo que viene a la mente cuando la elección es mínima! El vuelo mismo está aquí, los corrompidos lo abandonan, pero ¿alguien puede dar algo a algunos de todos los placeres de los bienaventurados? complacer a otras mentes, rechazar las palabras y ganar el dolor? Así los alivia del dolor. ¡Él necesita placer en este momento, tan a menudo que el dolor es él! El arquitecto critica el error de tomar la evitación en lugar de distinguirla de los placeres que puede obtener de ella, y muchas veces odia esos dolores, o los de la vida misma. Para el dolor y el placer, para el modo principal, nadie descubre la distinción más importante entre el ejercicio y el placer.';
        art3P.textContent = 'El dolor en si, a implementar en el proceso adipisic principal. Algunos de la vida de la que estaba separado de la mente, cegado por el cuerpo, y la evitación de la elección, el placer de la molestia, y no la libertad de cualquier cosa, y algunos otros no son conscientes del dolor. Pero los tiempos, cuando están libres de ese dolor, proveen para las necesidades de cualquier dolor; A menos que, por así decirlo, la verdad, puede hacer retroceder a aquellos a quienes halaga, o lo que sea, de gran molestia, y en cuanto a nuestras mentes, que, para que cualquiera pueda realmente abrirlo a nuestras necesidades, hace que aquellos alabando y el dolor artífice de su resiliencia. Todos ellos deben ser aceptados, porque rechazando, pero sobre todo, cualquier pena del bienaventurado, la elección de los presentes para obtener los servicios que obtenemos, para que la consideremos libre de las necesidades de lo que es necesario. . No dejemos que las declaraciones del cuerpo de este tipo sean totalmente contrarrestadas, es perdonable, nace la blandura, las cosas fáciles, el dolor y el dolor. Voy a quitarle el placer al ejercicio, te explicaré cómo escapar del paseo, lo cual puedo hacer con algún curso de preparación libre, ¡tómalo, hazlo! El empeñado puede proporcionar el menor dolor, los sabios nos siguen las necesidades de la verdad, el placer no está estorbado por el odio, podemos evitar la incomodidad de aquellos que solo nacen de las elecciones ventajosas, aquellos que los elogian. ! Cualquiera de nosotros que es bendecido con el más pequeño error que resulta del dolor físico de repudiarlo, recibe algún relleno en el momento para que podamos buscarlo.';
    }
    else if(idioma == 'japones'){

        body.style.fontFamily = 'var(--jp)';
        botonIdioma.textContent = '言語を変更';
        titulo.textContent = '私のブログへようこそ！';

        art1Titulo.textContent = 'あなたがここで読むことができるクレイジーで楽しいもの';
        art2Titulo.textContent = '私たちは本当にシミュレーションに住んでいますか？';
        art3Titulo.textContent = 'ポピー、そして彼らが世界にとって本当に意味すること';

        art1P.textContent = '痛み自体は、アジピシカドールのコアエリートにとって重要です。そのハードワークを得るために、それはこれらすべての製品の結果であることは間違いありません！彼は自分が選んだ痛みが同じであることを知る喜びを嫌っています。しかし、賢人、私たちはこれらをどのようなサービスで非難しますか？愛されたり受け入れられたりする真実の喜びは、彼がこれらの痛みに最もふさわしいものになることを妨げます。そして、しばしば自由に陥るいわゆる喜びを避けるものは何もないので、彼は彼の痛みを許さなければならず、すべての選択は彼によって叱責されるかもしれません。同じ。間違い。私たちが私たちの取引からの喜びと喜びの区別に従うとき、私たちはそれを賞賛者にとって楽しいと思いますか？生まれた子供は、同じように満たされると言われる喜びを避けます。あなたは彼に多くの借金を負っていますが、あなたが持っているものそのものに権利があります！';

        art2P.textContent =  '痛み自体は、アジピシカドールのコアエリートにとって重要です。とりわけ、権利とそのために、あるいは快楽ビルダーの喜びのためにさえ！選ばれた真理の苦痛、それゆえ、必要が解放されたときの利点、偉大なものは、その人が私たちに現在のお世辞を非難するようになるでしょうか？それは彼だけでした！なぜなら、選民が彼らの職を放棄したことを私たちが正しく非難し、彼が悲しみを持って生まれたことは決してないだろうからです。賢い。彼らは、彼らが現在の孤立した行為をどのように放棄するか、または真実を拒否する人々を非難する方法を知りません。そして、彼の作品のいずれか、そして彼はしばしば理由の対象ではありません、彼はどのような手段で彼を愛し、誰を愛し、そして彼は権利または利益のためにそれをしませんが、理由のためにそれをしますか？多くの場合、このエラーは痛みの選択につながる可能性があり、したがって、痛みと痛みの区別は、私たちに発生する問題のタイプから生じますが、肉体労働に目がくらんでいる間、誰も体のサービスを求める理由はありません。私たちは、人生そのものではなく、現在の仕事の必需品や喜びを否定していると非難します。賢人は私たちを堕落したものであると非難するために生まれました。彼は避けなければならないので、真実の自由な予測から解放されますが、祝福された他の素晴らしいオプションは、私たちが有利なすべての喜びを楽しむことを可能にしますもの、入手してください。 、そしてその結果、憎しみ。賢人は、彼の告発者の罪悪感が彼の痛みを開くことはないので、彼が大きな喜びの権利によって開くことを義務付けられている人の業務を続けることを約束します。どうか、私たちを盲目にさせてください。さもないと、痛みを主な喜びの源として受け入れ、彼らの許しを拒否する必要性を嫌う彼女に腹を立てていることであなたを非難しているだけです。誰もがお世辞を嫌う人、これらの永続的な喜びの女々しさを選ぶ人、ただの喜びで彼らの義務を果たす方法を知らない人、またはそれはしばしば大きな痛みであると誰が思いますか？それは私たちを、私たちの言葉に従うことを嫌う痛みそのものと同じくらいお世辞になります。誰も間違いを受け入れませんか？あなたがそれらの選挙の柔らかさに陥ると、喜びと嫌悪が起こります。それは、いわば、素晴らしい季節の中で最も要求の厳しい選挙であり、彼らが私たちに仕事のサービスを提供するならば、これはすべての中で最も喜びが少ないです。痛み自体の！';

        art3P.textContent = '痛み自体は、アジピシカドールのコアエリートにとって重要です。とりわけ、権利とそのために、あるいは快楽ビルダーの喜びのためにさえ！選ばれた真理の苦痛、それゆえ、必要が解放されたときの利点、偉大なものは、その人が私たちに現在のお世辞を非難するようになるでしょうか？それは彼だけでした！なぜなら、選民が彼らの職を放棄したことを私たちが正しく非難し、彼が悲しみを持って生まれたことは決してないだろうからです。賢い。彼らは、彼らが現在の孤立した行為をどのように放棄するか、または真実を拒否する人々を非難する方法を知りません。そして、彼の作品のいずれか、そして彼はしばしば理由の対象ではありません、彼はどのような手段で彼を愛し、誰を愛し、そして彼は権利または利益のためにそれをしませんが、理由のためにそれをしますか？多くの場合、このエラーは痛みの選択につながる可能性があり、したがって、痛みと痛みの区別は、私たちに発生する問題のタイプから生じますが、肉体労働に目がくらんでいる間、誰も体のサービスを求める理由はありません。私たちは、人生そのものではなく、現在の仕事の必需品や喜びを否定していると非難します。賢人は私たちを堕落したものであると非難するために生まれました。彼は避けなければならないので、真実の自由な予測から解放されますが、祝福された他の素晴らしいオプションは、私たちが有利なすべての喜びを楽しむことを可能にしますもの、入手してください。 、そしてその結果、憎しみ。賢人は、彼の告発者の罪悪感が彼の痛みを開くことはないので、彼が大きな喜びの権利によって開くことを義務付けられている人の業務を続けることを約束します。どうか、私たちを盲目にさせてください。さもないと、痛みを主な喜びの源として受け入れ、彼らの許しを拒否する必要性を嫌う彼女に腹を立てていることであなたを非難しているだけです。誰もがお世辞を嫌う人、これらの永続的な喜びの女々しさを選ぶ人、ただの喜びで彼らの義務を果たす方法を知らない人、またはそれはしばしば大きな痛みであると誰が思いますか？それは私たちを、私たちの言葉に従うことを嫌う痛みそのものと同じくらいお世辞になります。';
    }
};

if(localStorage.getItem('idioma') != null){
    body.style.overflowY = 'scroll';
    idioma.style.display = 'none';
    cambiarIdioma(localStorage.getItem('idioma'));
    botonIdioma.style.display = 'block';
}






