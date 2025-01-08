import { Container, Title } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { ProductGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";
import vesta from "./photos/vesta.png";
import rio from "./photos/rio.png";
import elantra from "./photos/elantra.png";
import haval from "./photos/haval.png";
import k5 from "./photos/k5.png";
import alphard from "./photos/alphard.png";
import sclasse from "./photos/Sclasse.png";
export default function Home() {
  return (
    <>
      <Container className="mt-11">
        <Title
          text="Все Междугородные Такси"
          size="lg"
          className="font-extrabold"
        />
      </Container>
      <TopBar />
      <Container className="flex-1">
        <div className="flex flex-col gap-16">
          <ProductGroupList
            title="Междугородное Такси"
            items={[
              {
                id: 1,
                name: "Эконом",
                imageUrl: vesta.src,
                price: 20,
                items: [{ price: 20 }],
              },
              {
                id: 2,
                name: "Стандарт",
                imageUrl: rio.src,
                price: 25,
                items: [{ price: 25 }],
                // Эконом 1км от 20р
                // Стандарт 1км от 25р
                // Комфорт 1км от 30р
                // Комфорт плюс 1км от 35р
                // Бизнес 1км от 50р
                // Минивэн 1км от 45р
                // Премиум 1км от 70р
              },
              {
                id: 3,
                name: "Комфорт",
                imageUrl: elantra.src,
                price: 30,
                items: [{ price: 30 }],
              },
              {
                id: 4,
                name: "Комфорт +",
                imageUrl: haval.src,
                price: 35,
                items: [{ price: 35 }],
              },
              {
                id: 5,
                name: "Бизнес",
                imageUrl: k5.src,
                price: 50,
                items: [{ price: 50 }],
              },
              {
                id: 6,
                name: "Минивэн",
                imageUrl: alphard.src,
                price: 45,
                items: [{ price: 45 }],
              },
              {
                id: 7,
                name: "Премиум",
                imageUrl: sclasse.src,
                price: 70,
                items: [{ price: 70 }],
              },
            ]}
            categoryId={1}
          />
          <div className="flex flex-col gap-16">
            <ProductGroupList title="WhatsApp" items={[]} categoryId={2} />
            <a href="https://wa.me/qr/4U5WQNI6DIRAF1">
              <img
                src="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_1280.png"
                alt="WhatsApp"
                width={400}
                height={400}
              />
            </a>
          </div>
          <div className="flex flex-col gap-16">
            <ProductGroupList title="Телеграм" items={[]} categoryId={3} />
            <a href="https://t.me/+jByqV6B7vfxjYmUy">
              <img
                src="https://cdn.pixabay.com/photo/2020/10/17/13/21/telegram-5662082_1280.png"
                alt="Телеграм"
                width={400}
                height={400}
              />
            </a>
          </div>
          <div className="flex flex-col gap-16">
            <ProductGroupList title="О нас" items={[]} categoryId={4} />
            <ul className="flex flex-col gap-5 list-disc pl-5 md:gap-10 md:text-5xl md:pl-50">
              <li className="text-2xl md:text-5xl">
                Автомобили от эконома до премиум класса, по самым низким ценам
              </li>
              <li className="text-2xl md:text-5xl">Опыт более чем 15 лет</li>
              <li className="text-2xl md:text-5xl">
                Междугородные поездки по всей России
              </li>
              <li className="text-2xl md:text-5xl">
                Поездки по ДНР, ЛНР, Крым
              </li>
              <li className="text-2xl md:text-5xl">Поездки в другие страны</li>
            </ul>
          </div>
          <div></div>
        </div>
      </Container>
    </>
  );
}
