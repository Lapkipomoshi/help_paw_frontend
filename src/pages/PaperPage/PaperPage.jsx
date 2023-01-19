import React from 'react';
import { useParams } from 'react-router-dom';
import './PaperPage.css';
import paperImage from '../../images/paper_big-image.jpg';

const PaperPage = () => {
  const { id } = useParams(); // id статьи, получаемый из url-адреса текущей страницы
  const [paper, setPaper] = React.useState({}); // информация о статье

  React.useEffect(() => {
    setPaper({ // будет запрашиваться с бэкенда
      id: id,
      photo: paperImage,
      title: 'Животное из приюта: что надо знать перед тем, как взять его в дом?',
      text: '',
      link: 'http://pif.dn.ua/publ/zhivotnoe_iz_prijuta_chto_nado_znat_pered_tem_kak_vzjat_ego_v_dom/3-1-0-2505',
    });
  }, [id]);

  return (
    <main className='main paper'>
      <h1 className='paper__title'>{paper.title}</h1>
      <img className='paper__image' src={paper.photo} alt='фото' />
      <p className='paper__text'>Вы давно хотели иметь в доме пушистого питомца? Вам скучно, если не за кем ухаживать, некого чесать за ухом и ласкать после работы? Отличный вариант - взять собаку или кошку из специального приюта!</p>
      <p className='paper__text'>Но бывает так, что однажды взятое животное потом возвращается в тот самый приют, и недоверие к людям остается у него на всю собачью или кошачью жизнь.</p>
      <p className='paper__text'>Как же решиться на такой шаг - забрать зверя из приюта и подарить ему дом, заботливых и ласковых хозяев? О чем надо подумать перед этим?</p>
      <p className='paper__text'>Если вы живете в одиночестве, проблем нет. А вот если вас двое или трое в семье, нужно обговорить возможность взятия кошки или собаки из приюта с другими членами семьи. Вдруг у ребенка окажется аллергия, а жена или муж просто не любят животных?</p>
      <p className='paper__text'>Заранее подготовьте себя и своих близких к тому, что дома появится новый друг. Собака будет требовать прогулок и игр, а кошке надо каждый день чистить лоток и насыпать корм в миску. Готовы ли вы к постоянному, ежедневному уходу за потенциальным домашним питомцем?</p>
      <p className='paper__text'>Вы и вправду готовы, осознаете все риски и ту ответственность, которую берете на себя? Тогда начинайте поиски собаки или кошки.</p>
      <p className='paper__text'>Но, опять же, не каждая порода подходит для дома. И дело вовсе не в размерах животного, а в его характере и поведении. Например, лабрадоры веселые, активные и любят детей, а с шарпеем придется много гулять; для породистых кошек нужен специальный корм и витамины, а простой беспородный котик будет рад и супу, и каше.</p>
      <p className='paper__text'>Допустим, вы выбрали подходящего питомца и уже готовы впустить его в свой дом и свое сердце. Тогда займитесь подготовкой личного уголка для нового жильца: миски для еды и воды, подстилка, когтеточка, ошейник и поводок, игрушки - все это нужно покупать и время от времени менять. В подборе всего необходимого вам поможет сайт pethouse.ua.</p>
      <p className='paper__text'>Когда кошка или собака робко вошли в квартиру и начали обнюхивать то место, где им предстоит жить, не начинайте их гладить, тискать или играть с ними. Животному надо дать освоиться в спокойной обстановке, чтобы потом не было проблем. Просто наблюдайте и делайте выводы.</p>
      <p className='paper__text'>Обязательно отвезите нового питомца к ветеринару, если не хотите потом долго и дорого лечить многочисленные болезни своего любимца. Опытный ветврач быстро осмотрит животное, расскажет, чем и как его кормить и как ухаживать за шерстью, глазами и ушами.</p>
      <p className='paper__text'>Вы хотите вырастить из взятого в приюте щеночка верного сторожа и защитника? Тогда вам прямая дорога на кинологические площадки, где собак учат правилам охраны и защиты своего хозяина. Разумеется, не все собаки подходят под категорию “защитника”, но минимальные навыки они усвоят.</p>
      <a className='paper__link' href={paper.link} target='_blank'>Ссылка на источник</a>
    </main>
  );
}

export default PaperPage;
