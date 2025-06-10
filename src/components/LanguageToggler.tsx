'use client';

import { useLanguage } from '@/lib/i18n/ClientLanguageProvider';
import { Button } from './ui/button';

export function LanguageToggler() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="min-w-[60px]"
      >
        EN
      </Button>
      <Button
        variant={language === 'id' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('id')}
        className="min-w-[60px]"
      >
        ID
      </Button>
    </div>
  );
} 