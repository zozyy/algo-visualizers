import classes from './navbar.module.scss';
import Title from '../title/title';

export interface Props {
  title: string;
}

function Navbar({ title }: Props) {
  return (
    <nav className={classes.navbar}>
      <Title title={title} />
    </nav>
  );
}

export default Navbar;
