import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home_page">
      <section className="home_hero">
        <div className="home_content">
          <h1 className="home_title">
            Пространство <br />
            <span>умных решений</span>
          </h1>
          <p className="home_text">
            Откройте для себя коллекцию гаджетов и аксессуаров нового поколения. 
            Создано, чтобы менять привычный образ жизни.
          </p>
          <Link to="/products" className="home_button">
            Смотреть товары
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        <div className="home_card">
          <h2>Почему выбирают нас?</h2>
          <ul>
            <li>✨ Премиальное качество материалов</li>
            <li>🚀 Бесплатная экспресс-доставка</li>
            <li>🛡️ Гарантия 2 года на всё</li>
            <li>💬 Поддержка 24/7 в Telegram</li>
            <li>🔄 30 дней на обмен и возврат</li>
            <li>💳 Удобная оплата долями</li>
            <li>🎁 Бонусы с каждой покупки</li>
            <li>🌍 Экологичная упаковка</li>
            <li>🌱 Забота об окружающей среде</li>
            <li>⭐ Более 10,000 довольных клиентов</li>
          </ul>
        </div>
      </section>
    </div>
  );
}