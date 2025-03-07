import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <>
      <section className="bg-grayBackground py-16">
        <section className="mx-auto text-center" style={{ width: 1120 }}>
          <ServicesItem
            src={"/img/org-net.png"}
            alt={"SpeedyNet"}
            title={"اینترنت سازمانی"}
          />
          <ServicesItem
            src={"/img/org-tel.png"}
            alt={"Telephone"}
            title={"تلفن سازمانی (VoIP)"}
          />
          <ServicesItem
            src={"/img/org-co.png"}
            alt={"Sim"}
            title={"کولوکیشن (میزبانی سرور)"}
          />
          <ServicesItem
            src={"/img/org-vpn.png"}
            alt={"Film"}
            title={"شبکه خصوصی VPN | APN | VPLS | MPLS"}
          />
          <ServicesItem
            src={"/img/sim.png"}
            alt={"NetServices"}
            title={"سیمکارت سازمانی"}
          />
          <ServicesItem
            src={"/img/org-namava.png"}
            alt={"Services"}
            title={"نماوا سازمانی"}
          />
        </section>
      </section>
    </>
  );
};

export default Services;
