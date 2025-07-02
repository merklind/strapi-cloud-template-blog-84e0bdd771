import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAdvFluid extends Struct.ComponentSchema {
  collectionName: 'components_shared_adv_fluids';
  info: {
    displayName: 'AdvFluidComponent';
  };
  attributes: {};
}

export interface SharedHeroSectionComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_section_components';
  info: {
    displayName: 'HeroSectionComponent';
    icon: 'information';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    title: Schema.Attribute.Blocks;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSimpleTextSectionComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_simple_text_section_components';
  info: {
    displayName: 'SimpleTextSectionComponent';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.adv-fluid': SharedAdvFluid;
      'shared.hero-section-component': SharedHeroSectionComponent;
      'shared.seo': SharedSeo;
      'shared.simple-text-section-component': SharedSimpleTextSectionComponent;
    }
  }
}
