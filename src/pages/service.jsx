import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import OurServices from '../components/ourServices';
import Consultation from '../components/buttons/freeConsultation';
import SeeServices from '../components/buttons/seeServices';
import data from '../data.json';
import Errorpage from './errorpage';
import { useLanguage } from '../useLanguage';

function Service() {
  const { language } = useLanguage()
  const { services, service } = useParams();
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const product = data.pages.services?.find(item => item.url === `/services/${service}`);
    setServiceData(product);
  }, [service, services]);

  if (!serviceData) {
    return <Errorpage />;
  }

  return (
    <main className={`flex flex-col w-full min-h-screen font-Inter 4xl:items-center bg-[#FDFEFF] ${language === "Geo" ? "font-Noto" : "font-Inter"}`}>

      <section className='flex flex-col px-[28px] 4xl:w-[1440px] 4xl:px-0'>
        <OurServices />

        {serviceData && (
          <div className="flex flex-col gap-[31px] lg:gap-[35px]">
            <img className='flex w-full h-[252px] rounded-[27px] object-cover lg:h-[400px]' src={require(`../assets${serviceData.image}`)} alt={serviceData.title} />
            <div className='flex flex-col gap-[40px] w-full justify-center md:flex-row sm:justify-between sm:items-center'>
              <h1 className={`text-[24px] font-semibold leading-[27px] text-[#f7941d] lg:leading-[45px] lg:text-[40px] ${language === "Geo" ? "text-[18px] lg:text-[38px] " : ""} `}>{language === "Geo" ? serviceData.titleGeo : serviceData.title}</h1>
              <Consultation />
            </div>
          </div>
        )}

        <ul className='flex flex-col gap-[8px] mt-[53px] mb-[93px] px-[28px] lg:mb-[125px]'>
          {language === "Geo" && serviceData && serviceData.textGeo.map((item) => (
            <li className='text-[14px] font-medium list-disc lg:text-[20px]'>{item}</li>
          ))}
          {language !== "Geo" && serviceData && serviceData.text.map((item) => (
            <li className='text-[14px] font-medium list-disc lg:text-[20px]'>{item}</li>
          ))}
        </ul>


        <div className='flex flex-col gap-[33px] mb-[92px] lg:flex-row lg:justify-between 2xl:justify-center lg:border lg:border-gray lg:shadow-md lg:shadow-offset-md  lg:rounded-[25px] lg:pt-[45px] lg:px-[15px] lg:pb-[25px] 2xl:gap-[8%]' >
          {serviceData && serviceData.otherServices.img.map((item, index) => (
            <Link className='flex flex-col lg:w-[350px]' to={serviceData.otherServices.url[index]} key={index}>


              <div className='flex flex-col transform transition-transform duration-300 hover:-translate-y-2 rounded-[28px]'>
                <img className='w-full h-[252px] object-cover rounded-[27px]' src={require(`../assets${item}`)} alt={serviceData.title} />

                <div className='flex flex-col h-[115px] justify-between sm:h-[80px] lg:h-[120px]'>
                  <h1 className='text-[23px] font-semibold leading-[27px] text-[#101828] pt-[21px] pb-[25px] lg:pb-0'>{language === "Geo" ? serviceData.otherServices.titleGeo[index] : serviceData.otherServices.title[index]}</h1>
                </div>
              </div>

              <SeeServices />
            </Link>
          ))}
        </div>

      </section>

    </main>
  );
}


export default Service;
