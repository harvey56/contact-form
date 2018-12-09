import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  },
  form: {
    width: '400px',
    'align-items': 'center'
  },
  title: {
    display: 'flex',
    'justify-content': 'center'
  }
});

export default styles;  