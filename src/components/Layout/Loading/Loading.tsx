import * as React from 'react';

import styles from './Loading.module.scss';


const Loading: React.FC = () => {
  return (
    <div className={styles['loading-conatiner']}>
      <div className={styles.loading} />
    </div>
  );
};

export default Loading;
