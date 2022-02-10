import './TestimonialsCard.scss';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { testimonialsData } from '../../../../utils/DataConfig';
import ClientLogoList from './components/ClientLogoList/ClientLogoList';
import ClientContent from './components/ClientContent/ClientContent';
function TestimonialsCard() {
  const clientData = testimonialsData.clientData;
  const clientLogoData = testimonialsData.clientLogoData;
  return (
    <div id='testimonials' className='testimonials-card section'>
      <div className='container'>
        <div className='testimonials-inner'>
          <SectionTitle title='testimonials' />
          <div className='client-info'>
            <ClientContent clientData={clientData} />
          </div>
          <div className='client-list'>
            <ClientLogoList clientLogoData={clientLogoData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
