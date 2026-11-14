'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Mail,
  Phone,
  MapPin,
  Printer,
  Clock,
  ExternalLink,
  Send,
  Building2,
  Navigation,
  CheckCircle2,
  FileText,
  Compass,
} from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import ProtectedContact from '@/components/ui/ProtectedContact';
import { siteConfig } from '@/config/site';
import { useLanguage, Language } from '@/context/LanguageContext';

interface ContactFormValues {
  name: string;
  company?: string;
  phone?: string;
  email: string;
  subject?: string;
  message: string;
}

export default function IletisimPage() {
  const { t, language } = useLanguage();

  const labels: Record<
    Language,
    {
      map_section_title: string;
      directions: string;
      openInGoogleMaps: string;
      company: string;
      company_placeholder: string;
      subject: string;
      subject_placeholder: string;
      subjects: string[];
      quick_actions: string;
      call_now: string;
      send_email: string;
      location_title: string;
      location_desc: string;
      dept_title: string;
      dept_sales: string;
      dept_quality: string;
      dept_hr: string;
      working_days: string;
    }
  > = {
    tr: {
      map_section_title: 'Fabrika & Genel Merkez Konumu',
      directions: 'Yol Tarifi Al',
      openInGoogleMaps: "Google Haritalar'da Aç",
      company: 'Firma Adı',
      company_placeholder: 'Çalıştığınız kurum veya şirket',
      subject: 'Konu / Talep Türü',
      subject_placeholder: 'Lütfen bir konu seçiniz',
      subjects: [
        'Teklif Talebi (RFQ) / Parça İmalatı',
        'Teknik & Mühendislik Danışma',
        'Fason Pres / Lazer / Kaynak İşleri',
        'Kalıp & Fikstür Tasarım Projesi',
        'Tedarikçi / İş Ortaklığı',
        'Genel Bilgi & Diğer',
      ],
      quick_actions: 'Hızlı İletişim',
      call_now: 'Doğrudan Arayın',
      send_email: 'E-Posta Gönderin',
      location_title: 'Merkezi Lojistik & Ulaşım Kolaylığı',
      location_desc:
        "Fabrikamız Ankara 1. Organize Sanayi Bölgesi'nde (Sincan), E-90 / D-200 ana karayoluna ve demiryolu lojistik hatlarına doğrudan bağlantılı stratejik bir lokasyonda yer almaktadır.",
      dept_title: 'Bölüm İletişimleri',
      dept_sales: 'Satış, İhracat & Teklif (RFQ)',
      dept_quality: 'Kalite Güvence & Laboratuvar',
      dept_hr: 'İnsan Kaynakları & Kariyer',
      working_days: 'Pazartesi - Cuma: 08:00 - 18:00 (Hafta sonu kapalı)',
    },
    en: {
      map_section_title: 'Plant & Headquarters Location',
      directions: 'Get Directions',
      openInGoogleMaps: 'Open in Google Maps',
      company: 'Company Name',
      company_placeholder: 'Your company or organization',
      subject: 'Subject / Request Type',
      subject_placeholder: 'Please select a topic',
      subjects: [
        'Request for Quote (RFQ) / Parts Supply',
        'Technical & Engineering Consultation',
        'Contract Stamping / Laser / Welding',
        'Tooling & Fixture Design Project',
        'Supplier / Partnership Inquiry',
        'General Information & Others',
      ],
      quick_actions: 'Quick Contacts',
      call_now: 'Call Directly',
      send_email: 'Send an Email',
      location_title: 'Central Logistics & Transport Connectivity',
      location_desc:
        'Our manufacturing plant is located in Ankara 1st Organized Industrial Zone (Sincan), directly connected to the E-90 highway corridor and major freight hubs.',
      dept_title: 'Department Contacts',
      dept_sales: 'Sales, Export & RFQ Desk',
      dept_quality: 'Quality Assurance & QA Lab',
      dept_hr: 'Human Resources & Careers',
      working_days: 'Monday - Friday: 08:00 - 18:00 (Closed on weekends)',
    },
    de: {
      map_section_title: 'Standort Werk & Hauptsitz',
      directions: 'Route berechnen',
      openInGoogleMaps: 'In Google Maps öffnen',
      company: 'Firmenname',
      company_placeholder: 'Ihr Unternehmen oder Organisation',
      subject: 'Betreff / Anfragetyp',
      subject_placeholder: 'Bitte wählen Sie ein Thema',
      subjects: [
        'Preisanfrage (RFQ) / Teilefertigung',
        'Technische & Engineering-Beratung',
        'Lohnstanzen / Laser / Schweißen',
        'Werkzeug- & Vorrichtungsbau',
        'Lieferanten- & Partnerschaftsanfrage',
        'Allgemeine Informationen',
      ],
      quick_actions: 'Schnellkontakt',
      call_now: 'Direkt anrufen',
      send_email: 'E-Mail senden',
      location_title: 'Zentraler Logistik- & Verkehrsknotenpunkt',
      location_desc:
        'Unser Werk befindet sich in der 1. Organisierten Industriezone Ankara (Sincan) mit direkter Anbindung an die Autobahn E-90.',
      dept_title: 'Abteilungsübersicht',
      dept_sales: 'Vertrieb, Export & Angebote (RFQ)',
      dept_quality: 'Qualitätssicherung & Prüflabor',
      dept_hr: 'Personalwesen & Karriere',
      working_days: 'Montag - Freitag: 08:00 - 18:00 (Wochenende geschlossen)',
    },
    fr: {
      map_section_title: 'Localisation de l’usine & Siège social',
      directions: 'Itinéraire',
      openInGoogleMaps: 'Ouvrir dans Google Maps',
      company: 'Nom de la société',
      company_placeholder: 'Votre entreprise ou organisation',
      subject: 'Sujet / Type de demande',
      subject_placeholder: 'Veuillez sélectionner un motif',
      subjects: [
        'Demande de devis (RFQ) / Sous-traitance',
        'Conseil technique & Ingénierie',
        'Emboutissage / Découpe laser / Soudage',
        'Conception d’outillages & gabarits',
        'Partenariat & Fournisseurs',
        'Renseignements généraux',
      ],
      quick_actions: 'Contacts rapides',
      call_now: 'Appeler directement',
      send_email: 'Envoyer un courriel',
      location_title: 'Situation logistique centrale & accès aisé',
      location_desc:
        "Notre usine est implantée dans la 1ère Zone Industrielle Organisée d'Ankara (Sincan), à proximité immédiate de l'autoroute E-90.",
      dept_title: 'Contacts directs par service',
      dept_sales: 'Ventes, Export & Chiffrage (RFQ)',
      dept_quality: 'Assurance Qualité & Métrologie',
      dept_hr: 'Ressources Humaines & Recrutement',
      working_days: 'Lundi - Vendredi : 08h00 - 18h00 (Fermé le week-end)',
    },
  };

  const l = labels[language] || labels['tr'];

  const contactSchema = z.object({
    name: z.string().min(3, t('form.val_name_min')),
    company: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email(t('form.val_email')),
    subject: z.string().optional(),
    message: z.string().min(10, t('form.val_message_min')),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log('Contact form submitted:', data);
    reset();
  };

  const pageTitle = t('nav.iletisim');

  const breadcrumbs = [
    { name: t('nav.home'), href: `/${language}` },
    { name: pageTitle },
  ];

  const contactInfoList = [
    {
      icon: MapPin,
      title: t('ui.address'),
      content: <span>{siteConfig.contact.address}</span>,
      action: {
        label: l.directions,
        href: siteConfig.contact.directMapsUrl,
        external: true,
      },
    },
    {
      icon: Phone,
      title: t('ui.phone'),
      content: (
        <ProtectedContact
          type="phone"
          className="text-slate-800 font-semibold hover:text-blue-600 transition-colors"
        />
      ),
    },
    {
      icon: Mail,
      title: t('ui.email'),
      content: (
        <ProtectedContact
          type="email"
          className="text-slate-800 font-semibold hover:text-blue-600 transition-colors"
        />
      ),
    },
    {
      icon: Printer,
      title: t('ui.fax') !== 'ui.fax' ? t('ui.fax') : 'Faks',
      content: (
        <ProtectedContact
          type="fax"
          className="text-slate-800 font-semibold"
          asLink={false}
        />
      ),
    },
    {
      icon: Clock,
      title: t('ui.working_hours_label'),
      content: <span>{l.working_days}</span>,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <PageBanner title={pageTitle} breadcrumbs={breadcrumbs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* 1. Top Quick Actions Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-500 hover:shadow-md transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                {t('ui.phone')}
              </span>
              <ProtectedContact
                type="phone"
                className="text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors block truncate"
              />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-500 hover:shadow-md transition-all flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                {t('ui.email')}
              </span>
              <ProtectedContact
                type="email"
                className="text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors block truncate"
              />
            </div>
          </div>

          <a
            href={siteConfig.contact.directMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-500 hover:shadow-md transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0">
              <Navigation className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                {l.directions}
              </span>
              <span className="text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                <span>{l.openInGoogleMaps}</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600" />
              </span>
            </div>
          </a>
        </div>

        {/* 2. Middle Row: Contact Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Info & Department Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-3">
                <span className="h-5 w-1 bg-blue-600 rounded-full" />
                <span>{t('ui.contact_info')}</span>
              </h2>

              <ul className="space-y-4">
                {contactInfoList.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={idx}
                      className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl flex-shrink-0 mt-0.5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="space-y-1 min-w-0 flex-1">
                        <h4 className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                          {item.title}
                        </h4>
                        <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug break-words">
                          {item.content}
                        </div>
                        {item.action && (
                          <div className="pt-1">
                            <a
                              href={item.action.href}
                              target={item.action.external ? '_blank' : undefined}
                              rel={
                                item.action.external
                                  ? 'noopener noreferrer'
                                  : undefined
                              }
                              className="text-[11px] font-bold text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
                            >
                              <span>{item.action.label}</span>
                              {item.action.external && (
                                <ExternalLink className="h-3 w-3" />
                              )}
                            </a>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Department Contacts Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
                <FileText className="h-4 w-4 text-blue-600" />
                <span>{l.dept_title}</span>
              </h3>

              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {l.dept_sales}
                    </span>
                    <ProtectedContact
                      type="email"
                      className="text-xs font-bold text-blue-600 hover:underline block mt-0.5 break-all"
                    />
                  </div>
                  <Mail className="h-4 w-4 text-slate-400 flex-shrink-0" />
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {l.dept_quality}
                    </span>
                    <ProtectedContact
                      type="phoneDept"
                      className="text-xs font-bold text-slate-700 block mt-0.5"
                      asLink={false}
                    />
                  </div>
                  <Building2 className="h-4 w-4 text-slate-400 flex-shrink-0" />
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {l.dept_hr}
                    </span>
                    <a
                      href={`/${language}/kurumsal/basvuru-formu`}
                      className="text-xs font-bold text-blue-600 hover:underline block mt-0.5"
                    >
                      {t('nav.kurumsal')} &rarr;
                    </a>
                  </div>
                  <Compass className="h-4 w-4 text-slate-400 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm relative overflow-hidden space-y-6">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600" />

              <div>
                <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-3">
                  <span className="h-5 w-1 bg-blue-600 rounded-full" />
                  <span>{t('ui.contact_form')}</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {t('ui.contact_us')}
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all font-medium"
                      placeholder={t('form.name_placeholder')}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-[11px] font-semibold">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {l.company}
                    </label>
                    <input
                      type="text"
                      {...register('company')}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all font-medium"
                      placeholder={l.company_placeholder}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {t('form.email')}
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all font-medium"
                      placeholder={t('form.email_placeholder')}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[11px] font-semibold">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {t('form.phone')}
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all font-medium"
                      placeholder={t('form.phone_placeholder')}
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    {l.subject}
                  </label>
                  <select
                    {...register('subject')}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all font-medium cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {l.subject_placeholder}
                    </option>
                    {l.subjects.map((subj, idx) => (
                      <option key={idx} value={subj}>
                        {subj}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    {t('form.message')}
                  </label>
                  <textarea
                    rows={5}
                    {...register('message')}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition-all font-medium resize-none"
                    placeholder={t('form.message_placeholder')}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-[11px] font-semibold">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shadow-blue-500/20 active:scale-[0.98] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? t('ui.sending') : t('ui.send')}</span>
                </button>

                {isSubmitSuccessful && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <p className="text-emerald-800 text-xs sm:text-sm font-semibold">
                      {t('ui.success')}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* 3. Full-Width Panoramic Map Section (100% Width) */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          {/* Header Bar */}
          <div className="p-5 sm:p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                  {l.map_section_title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Ar Grup Makine San. ve Tic. A.Ş. — 1. OSB Avrupa Hun Cad. No: 10, 06935 Sincan / Ankara
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-xs bg-white px-3 py-1.5 rounded-lg text-slate-700 border border-slate-200 shadow-2xs font-semibold">
                39.9765° N, 32.5447° E
              </span>

              <a
                href={siteConfig.contact.directMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm shadow-blue-500/20 active:scale-95"
              >
                <Navigation className="h-3.5 w-3.5" />
                <span>{l.directions}</span>
                <ExternalLink className="h-3 w-3 opacity-80" />
              </a>
            </div>
          </div>

          {/* Full-Width Map Iframe with Centered Pin */}
          <div className="relative w-full h-[450px] md:h-[520px] bg-slate-100">
            <iframe
              src={siteConfig.contact.mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ar Grup Makine Google Maps Fabrika Konumu"
              className="w-full h-full"
            />
          </div>

          {/* Logistics & Highway Connectivity Footer */}
          <div className="p-5 sm:p-6 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2.5">
              <Building2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
              <span className="font-semibold text-slate-800">{l.location_title}:</span>
              <span>{l.location_desc}</span>
            </div>

            <a
              href={siteConfig.contact.directMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
            >
              <span>{l.openInGoogleMaps}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
