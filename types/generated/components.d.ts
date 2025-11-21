import type { Schema, Struct } from '@strapi/strapi';

export interface HomeBrightFutureSection extends Struct.ComponentSchema {
  collectionName: 'components_home_bright_future_sections';
  info: {
    displayName: 'BrightFutureSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeBrighterFutureStats extends Struct.ComponentSchema {
  collectionName: 'components_home_brighter_future_stats';
  info: {
    displayName: 'BrighterFutureStats';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.Text;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.Text;
  };
}

export interface HomeContactInfoItem extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_info_items';
  info: {
    displayName: 'contact-info-item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    value: Schema.Attribute.Text;
  };
}

export interface HomeContactSection extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_sections';
  info: {
    displayName: 'ContactSection';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeCoreValueItem extends Struct.ComponentSchema {
  collectionName: 'components_home_core_value_items';
  info: {
    displayName: 'core-value-item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    value: Schema.Attribute.String;
  };
}

export interface HomeCoreValues extends Struct.ComponentSchema {
  collectionName: 'components_home_core_values';
  info: {
    displayName: 'CoreValues';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHeader extends Struct.ComponentSchema {
  collectionName: 'components_home_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryButtonLink: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    secondaryButtonLink: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryButtonLink: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    secondaryButtonKey: Schema.Attribute.String;
    secondaryButtonValue: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeParentFeedbackSection extends Struct.ComponentSchema {
  collectionName: 'components_home_parent_feedback_sections';
  info: {
    displayName: 'ParentFeedbackSection';
  };
  attributes: {
    mainImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quoteImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomeParentFeedbacks extends Struct.ComponentSchema {
  collectionName: 'components_home_parent_feedbacks';
  info: {
    displayName: 'ParentFeedbacks';
  };
  attributes: {
    quote: Schema.Attribute.Text;
    userAvatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    userName: Schema.Attribute.Text;
  };
}

export interface HomeProgram extends Struct.ComponentSchema {
  collectionName: 'components_home_programs';
  info: {
    displayName: 'Program';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface HomeProgramCard extends Struct.ComponentSchema {
  collectionName: 'components_home_program_cards';
  info: {
    displayName: 'program-card';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    programImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomeTeacherCard extends Struct.ComponentSchema {
  collectionName: 'components_home_teacher_cards';
  info: {
    displayName: 'teacher-card';
  };
  attributes: {
    teacherImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    teacherName: Schema.Attribute.String;
    teacherRole: Schema.Attribute.Text;
  };
}

export interface HomeTeachersSection extends Struct.ComponentSchema {
  collectionName: 'components_home_teachers_sections';
  info: {
    displayName: 'TeachersSection';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.bright-future-section': HomeBrightFutureSection;
      'home.brighter-future-stats': HomeBrighterFutureStats;
      'home.contact-info-item': HomeContactInfoItem;
      'home.contact-section': HomeContactSection;
      'home.core-value-item': HomeCoreValueItem;
      'home.core-values': HomeCoreValues;
      'home.header': HomeHeader;
      'home.hero-section': HomeHeroSection;
      'home.parent-feedback-section': HomeParentFeedbackSection;
      'home.parent-feedbacks': HomeParentFeedbacks;
      'home.program': HomeProgram;
      'home.program-card': HomeProgramCard;
      'home.teacher-card': HomeTeacherCard;
      'home.teachers-section': HomeTeachersSection;
    }
  }
}
