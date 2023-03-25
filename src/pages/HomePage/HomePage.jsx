
import { Heading } from './HomePage.styled';
import { Section } from './HomePage.styled';
const HomePage = () => {
  return (
    <Section>
      
        <Heading> Take good care of your small pets   
          <a
            
              href="https://happypaw.ua/ua/assistance"
              target="_blank"
              rel="noopener noreferrer"
            >
              
                <use
                  href="/src/images/homePage/donate.jpg"
                ></use>
             
            </a></Heading>
      
    </Section>
  );
};

export default HomePage;