import { Profile } from 'components/Profile/Profile';
import user from './Profile/user';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Layout';

export const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <Profile items={user} />
    </Container>
  );
};
