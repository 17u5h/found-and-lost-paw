import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState<boolean>(false);

  const throwError = () => {
    setError((prev) => !prev);
  };

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button onClick={throwError}>
      {t('bug button')}
    </Button>
  );
};
