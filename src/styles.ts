import { StyleRules } from '@material-ui/core/styles';

export type ClassKeys =
  | 'root';

const styles: StyleRules = ({
    root: {
      display: 'flex',
      'justify-content': 'center',
      'flex-direction': 'column',
      'align-items': 'center'
    }
  });

export default styles;  