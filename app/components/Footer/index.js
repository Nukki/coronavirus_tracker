import React from 'react';
import { A, Wrapper, BigSection, SmallSection } from './styled';

function Footer() {
  return (
    <Wrapper>
      <BigSection>
        Based on data from <A target='_blank' href='https://github.com/CSSEGISandData/COVID-19'>John Hopkins University CSSE</A>
      </BigSection>
      <SmallSection>
        Built with 🧡 by <A target='_blank' href='https://nikkijack.tech'>Nikki Jack</A>
      </SmallSection>
    </Wrapper>
  );
}

export default Footer;
