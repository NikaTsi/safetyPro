import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import OurServices from '../components/ourServices';
import Consultation from '../components/buttons/freeConsultation';
import SeeServices from '../components/buttons/seeServices';
import data from '../data.json';

function Service() {
  const { services, service } = useParams();
  const [serviceData, setServiceData] = useState(null);



  useEffect(() => {
    const product = data.eng.pages[services]?.find(item => item.url === `/${services}/${service}`);
    setServiceData(product);
  }, [service, services]);


  return (
    <main className='flex flex-col w-full min-h-screen font-Inter 4xl:items-center bg-[#FDFEFF]'>

      <section className='flex flex-col px-[28px] 4xl:w-[1440px] 4xl:px-0'>
        <OurServices />

        {serviceData && (
          <div className="flex flex-col gap-[31px] lg:gap-[35px]">
            <img className='w-full h-[252px] object-cover rounded-[27px]' src={require(`../assets${serviceData.image}`)} alt={serviceData.title} />
            <h1 className='text-[24px] font-semibold leading-[27px] text-[#f7941d] lg:hidden'>{serviceData.title}</h1>
            <div className='flex w-full justify-center lg:flex-row lg:justify-between lg:items-center'>
              <h1 className='text-[24px] hidden font-semibold leading-[27px] text-[#f7941d] lg:text-[40px] lg:flex'>{serviceData.title}</h1>
              <Consultation />
            </div>
          </div>
        )}

        <ul className='flex flex-col gap-[8px] mt-[53px] mb-[93px] px-[28px] lg:mb-[125px]'>{serviceData && serviceData.text.map((item, index) => (
          <li className='text-[14px] font-medium list-disc lg:text-[20px]'>{item}</li>
        ))}
        </ul>


        <div className='flex flex-col gap-[33px] mb-[92px] lg:flex-row lg:justify-between 2xl:justify-center lg:border lg:border-gray lg:shadow-md lg:shadow-offset-md  lg:rounded-[25px] lg:pt-[45px] lg:px-[15px] lg:pb-[25px] 2xl:gap-[8%]' >
          {serviceData && serviceData.otherServices.img.map((item, index) => (
            <div className='flex flex-col lg:w-[350px]'>
              <img className='w-full h-[252px] object-cover rounded-[27px]' src={require(`../assets${item}`)} alt={serviceData.title} />

              <div className='flex flex-col h-[120px] justify-between'>
                <h1 className='text-[23px] font-semibold leading-[27px] text-[#101828] pt-[21px] pb-[25px] lg:pb-0'>{serviceData.otherServices.title[index]}</h1>
                <Link className='w-[116px]' to={serviceData.otherServices.url[index]}>
                  <SeeServices />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </section>

    </main>
  );
}


export default Service;
