import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="absolute top-4 right-4 z-20 flex gap-2">
      <button onClick={() => changeLanguage('en')} className={`p-1 rounded-md ${i18n.language === 'en' ? 'bg-primary/50' : ''}`}>🇬🇧</button>
      <button onClick={() => changeLanguage('es')} className={`p-1 rounded-md ${i18n.language === 'es' ? 'bg-primary/50' : ''}`}>🇪🇸</button>
    </div>
  );
};

export default LanguageSwitcher;