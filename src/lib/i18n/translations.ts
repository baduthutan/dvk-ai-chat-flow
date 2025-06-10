export type Language = 'en' | 'id';

export const translations = {
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      about: 'About',
      getStarted: 'Get Started'
    },
    hero: {
      announcement: 'Announcing Our $50M Series A',
      title: 'Deliver Futuristic AI-Driven Customer Service',
      description: 'DVK AI plugs directly into WhatsApp, Teams, Instagram, and email—so you move from endless ticket hell to real relationships, faster than ever.',
      cta: {
        primary: 'Book a Demo',
        secondary: 'Free 14-day trial'
      },
      platforms: {
        label: 'Works with'
      }
    },
    cta: {
      testimonials: {
        1: {
          text: "DVK AI helped us increase our conversion rate by 40% in just two months!",
          author: "Sarah, Marketing Director"
        },
        2: {
          text: "Our average order value increased by 25% after implementing DVK AI's smart upsells.",
          author: "Michael, E-commerce Lead"
        },
        3: {
          text: "Our team can now focus on high-value tasks while DVK AI handles routine customer inquiries.",
          author: "Alex, Customer Support Manager"
        },
        4: {
          text: "DVK AI integrated seamlessly with our existing systems. Implementation was a breeze.",
          author: "Jamie, CTO"
        }
      },
      title: {
        prefix: "Ready to Convert More Customers with",
        highlight: "AI Agents",
        suffix: "?"
      },
      subtitle: "See DVK AI in action, live—no credit card required.",
      button: "Book a Demo",
      footer: "Schedule at your convenience—slots fill up fast."
    }
  },
  id: {
    nav: {
      features: 'Fitur',
      pricing: 'Harga',
      about: 'Tentang',
      getStarted: 'Mulai'
    },
    hero: {
      announcement: 'Mengumumkan Pendanaan Seri A $50M',
      title: 'Layanan Pelanggan AI yang Futuristik',
      description: 'DVK AI terhubung langsung ke WhatsApp, Teams, Instagram, dan email—sehingga Anda beralih dari tumpukan tiket ke hubungan nyata, lebih cepat dari sebelumnya.',
      cta: {
        primary: 'Jadwalkan Demo',
        secondary: 'Uji coba gratis 14 hari'
      },
      platforms: {
        label: 'Bekerja dengan'
      }
    },
    cta: {
      testimonials: {
        1: {
          text: "DVK AI membantu kami meningkatkan tingkat konversi sebesar 40% hanya dalam dua bulan!",
          author: "Sarah, Direktur Pemasaran"
        },
        2: {
          text: "Nilai pesanan rata-rata kami meningkat 25% setelah mengimplementasikan upselling cerdas DVK AI.",
          author: "Michael, Kepala E-commerce"
        },
        3: {
          text: "Tim kami sekarang dapat fokus pada tugas bernilai tinggi sementara DVK AI menangani pertanyaan rutin pelanggan.",
          author: "Alex, Manajer Dukungan Pelanggan"
        },
        4: {
          text: "DVK AI terintegrasi dengan mulus dengan sistem yang ada. Implementasinya sangat mudah.",
          author: "Jamie, CTO"
        }
      },
      title: {
        prefix: "Siap untuk Mengkonversi Lebih Banyak Pelanggan dengan",
        highlight: "Agen AI",
        suffix: "?"
      },
      subtitle: "Lihat DVK AI dalam aksi, langsung—tanpa kartu kredit.",
      button: "Jadwalkan Demo",
      footer: "Jadwalkan sesuai kenyamanan Anda—slot terisi dengan cepat."
    }
  }
} as const;

export type TranslationKey = keyof typeof translations.en; 