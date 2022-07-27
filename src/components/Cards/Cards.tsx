import { GridContainer } from './style';

import { ILayoutProps } from '../../interfaces/layoutProps';

function Cards({ children }: ILayoutProps) {
  return <GridContainer>{children}</GridContainer>;
}

export default Cards;
