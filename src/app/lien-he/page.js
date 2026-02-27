import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaPhone,
  FaBuilding,
} from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { BsBank2 } from 'react-icons/bs';
import styles from './page.module.css';

export const metadata = {
  title: 'Liên hệ',
  description:
    'Liên hệ LTTN Electric - 74/21 Quốc lộ 13 cũ, Hiệp Bình Phước, Thủ Đức, TPHCM. Hotline: 0931.839.693. Email: lttnelectric@gmail.com.',
  openGraph: {
    title: 'Liên hệ - LTTN Electric',
    description:
      'Địa chỉ, số điện thoại, email liên hệ LTTN Electric tại TPHCM.',
  },
  alternates: {
    canonical: '/lien-he',
  },
};

const CONTACT_CARDS = [
  {
    id: 'address',
    icon: FaMapMarkerAlt,
    title: 'Địa chỉ',
    lines: [
      '74/21 Quốc lộ 13 cũ, Phường Hiệp Bình Phước',
      'Thành phố Thủ Đức, TPHCM',
    ],
  },
  {
    id: 'phone',
    icon: FaPhone,
    title: 'Điện thoại',
    lines: [
      { text: 'Hotline: 0931.839.693 (Long)', href: 'tel:0931839693' },
      { text: 'Kỹ thuật: 0938.068.545 (Thiện)', href: 'tel:0938068545' },
    ],
  },
  {
    id: 'email',
    icon: FaEnvelope,
    title: 'Email',
    lines: [
      {
        text: 'lttnelectric@gmail.com',
        href: 'mailto:lttnelectric@gmail.com',
      },
    ],
  },
  {
    id: 'social',
    icon: FaFacebook,
    title: 'Mạng xã hội',
    lines: [
      {
        text: 'Facebook: Biến tần Nhật',
        href: 'https://www.facebook.com/tranduythienhcm',
        external: true,
      },
      {
        text: 'Zalo: 0931.839.693',
        href: 'https://zalo.me/0931839693',
        external: true,
        icon: SiZalo,
      },
    ],
  },
  {
    id: 'company',
    icon: FaBuilding,
    title: 'Thông tin doanh nghiệp',
    lines: ['MST: 0315490830'],
  },
  {
    id: 'bank',
    icon: BsBank2,
    title: 'Thanh toán',
    lines: [
      'DN: Eximbank 182280700000013',
      'CN: Eximbank 180214849049153 (Vương Thanh Long)',
    ],
  },
];

function ContactCard({ card }) {
  const Icon = card.icon;
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        <Icon aria-hidden="true" />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <ul className={styles.cardLines}>
          {card.lines.map((line, i) => {
            if (typeof line === 'string') {
              return <li key={i}>{line}</li>;
            }
            const LineIcon = line.icon;
            return (
              <li key={i}>
                <a
                  href={line.href}
                  target={line.external ? '_blank' : undefined}
                  rel={line.external ? 'noopener noreferrer' : undefined}
                  className={styles.cardLink}
                >
                  {LineIcon && (
                    <LineIcon aria-hidden="true" className={styles.lineIcon} />
                  )}
                  {line.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Liên hệ với chúng tôi</h1>
        <p className={styles.subtitle}>
          LTTN Electric luôn sẵn sàng hỗ trợ quý khách. Hãy liên hệ qua các
          kênh bên dưới.
        </p>
      </div>

      <div className={styles.grid}>
        <section className={styles.cards} aria-label="Thông tin liên hệ">
          {CONTACT_CARDS.map((card) => (
            <ContactCard key={card.id} card={card} />
          ))}
        </section>

        <section className={styles.mapSection} aria-label="Bản đồ">
          <div className={styles.mapCard}>
            <h2 className={styles.mapTitle}>Bản đồ</h2>
            <div className={styles.mapContainer}>
              <iframe
                title="LTTN Electric trên Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.955289265438!2d106.72018597092931!3d10.860201690845258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752809b7ad8f6d%3A0xf6e2723389cf6d2b!2zNzQgxJAuIFF14buRYyBs4buZIDEzIGPFqSwgSGnhu4dwIELDrG5oIFBoxrDhu5tjLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1709888950639!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
