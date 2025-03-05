import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <>
      <section className="bg-grayBackground py-16">
        <div className="pt-10 pb-20 mx-auto sans text-center" style={{ width: 1120 }}>
          <h2 className="text-3xl mb-12">
            <b>لبخندتان را به دنیا نمی‌دهیم!</b>
          </h2>
          <span className="text-center text-sm flex-wrap text-slate-800 w-60 overflow-x-auto">
            شاتل با ارائه خدمات و راهکارهای ارتباطی و محتوایی ارزش‌آفرین و
            نوآورانه و نیز پای‌بندی به اخلاق <br /> حرفه‌ای و مسئولیت‌های
            اجتماعی، رسالت خود را خلق لبخند رضایت در جامعه می‌داند.
          </span>
        </div>
        <section className="mx-auto text-center" style={{ width: 1120 }}>
          <ServicesItem
            src={"/img/pcs.png"}
            alt={"SpeedyNet"}
            title={"خدمات اینترنت پرسرعت ثابت"}
            description={"بهترین راهکار برای دستیابی به اینترنت پرسرعت ثابت"}
          />
          <ServicesItem
            src={"/img/telephone.png"}
            alt={"Telephone"}
            title={"خدمات تلفن"}
            description={"نسل جدید خدمات تلفن با ویژگی های منحصر به فرد"}
          />
          <ServicesItem
            src={"/img/sim.png"}
            alt={"Sim"}
            title={"سیمکارت هوشمند شاتل موبایل"}
            description={
              "تنها اپراتور ارائه دهنده سیمکارت هوشمند با خدمات مکالمه ، پیامک واینترنت 4G/LTE"
            }
          />
          <ServicesItem
            src={"/img/film.png"}
            alt={"Film"}
            title={"تماشای انلاین فیلم و سریال(نماوا)"}
            description={"خلق یک تجربه لذت بخش انلاین"}
          />
          <ServicesItem
            src={"/img/organization.png"}
            alt={"NetServices"}
            title={"خدمات مجتمع های مسکونی و تجاری"}
            description={
              "سرویس مجتمع های مسکونی و تجاری راهی مطمئن برای دسترسی به اینترنت و برقراری ارتباط"
            }
          />
          <ServicesItem
            src={"/img/net4g.png"}
            alt={"Services"}
            title={"خدمات همگرایی ثابت و سیار"}
            description={"تنها سرویس ترکیبی و همگرای موبایل و ADSL2+"}
          />
        </section>
      </section>
    </>
  );
};

export default Services;
