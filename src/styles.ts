import { StyleRules } from '@material-ui/core/styles';

export type ClassKeys =
  | 'root'
  | 'form'
  | 'title';

const styles: StyleRules = ({
    root: {
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
    },
    form: {
      width: '300px',
      'align-items': 'center'
    },
    title: {
      display: 'flex',
      'justify-content': 'center'
    },
    button: {
      display: 'flex',
      'align-items': 'center'
    }
  });

export default styles;  