import BottomServicesItem from "./BottomServicesItem";

const BottomServices = () => {
  return (
    <>
      <section className="bg-gray2Background pt-8 pb-16">
        <section
          className="mx-auto text-center bg-gray2Background"
          style={{ width: 1120 }}
        >
          <BottomServicesItem
            src={"/img/online-buy.png"}
            alt={"OnlineBuy"}
            title={"خرید انلاین"}
          />
          <BottomServicesItem
            src={"/img/prices.png"}
            alt={"Prices"}
            title={"خرید انلاین"}
          />
          <BottomServicesItem
            src={"/img/share.png"}
            alt={"Share"}
            title={"برسی پوشش خدمات"}
          />
          <BottomServicesItem
            src={"/img/buyers.png"}
            alt={"Buyers"}
            title={"باشگاه مشتریان"}
          />
        </section>
      </section>
    </>
  );
};

export default BottomServices;
