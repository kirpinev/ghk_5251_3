import { Typography } from "@alfalab/core-components/typography";
import rocket from "../assets/rocket.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";

export const ThxLayout = () => {
  const submit = () => {
    window.gtag("event", "5251_get_real_sub", {
      variant_name: "5251_3",
    });
  };

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={rocket}
          width={135}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Спасибо, мы записали ваш ответ
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          Сервис находится в разработке. Как только он будет доступен, мы
          обязательно вам сообщим.
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtnThx}>
        <ButtonMobile
          block
          view="primary"
          onClick={submit}
          href="https://online.alfabank.ru"
        >
          Вернуться на главный
        </ButtonMobile>
      </div>
    </>
  );
};
