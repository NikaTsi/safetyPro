import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
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
    <main className='flex flex-col w-full min-h-screen font-Inter'>
      <Header />

      <section className='flex flex-col px-[28px]'>
        <OurServices />

        {serviceData && (
          <div className="flex flex-col gap-[31px]">
            <img className='w-full h-[252px] object-cover rounded-[27px]' src={require(`../assets${serviceData.image}`)} alt={serviceData.title} />
            <h1 className='text-[24px] font-semibold leading-[27px] text-[#f7941d]'>{serviceData.title}</h1>
            <div className='flex w-full justify-center'>
              <Consultation />
            </div>
          </div>
        )}

          <ul className='flex flex-col gap-[8px] mt-[53px] mb-[93px] px-[28px] '>{serviceData && serviceData.text.map((item, index) => (
            <li className='text-[14px] font-medium list-disc'>{item}</li>
          ))}
          </ul>


        <div className='flex flex-col gap-[33px] mb-[92px]'>
          {serviceData && serviceData.otherServices.img.map((item, index) => (
            <div className='flex flex-col'>
              <img className='w-full h-[252px] object-cover rounded-[27px]' src={require(`../assets${item}`)} alt={serviceData.title} />
              <h1 className='text-[23px] font-semibold leading-[27px] text-[#101828] pt-[21px] pb-[25px]'>{serviceData.otherServices.title[index]}</h1>
              <Link to={serviceData.otherServices.url[index]}>
                <SeeServices />
              </Link>
            </div>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}

export default Service;
