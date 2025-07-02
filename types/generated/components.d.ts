import type { Schema, Struct } from '@strapi/strapi';

export interface DistributorContactInformation extends Struct.ComponentSchema {
  collectionName: 'components_distributor_contact_informations';
  info: {
    displayName: 'Contact information';
    icon: 'envelop';
  };
  attributes: {
    availability: Schema.Attribute.RichText & Schema.Attribute.Required;
    availabilityNotification: Schema.Attribute.RichText &
      Schema.Attribute.Required;
    distributor: Schema.Attribute.Relation<
      'oneToOne',
      'api::distributor.distributor'
    >;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    phoneNumber: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DistributorFaqArticleContent extends Struct.ComponentSchema {
  collectionName: 'components_distributor_faq_article_contents';
  info: {
    displayName: 'FAQ Article Content';
    icon: 'question';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    distributor: Schema.Attribute.Relation<
      'oneToOne',
      'api::distributor.distributor'
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: '[Temp] Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: '[Temp] Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: '[Temp] Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: '[Temp] Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: '[Temp] Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'distributor.contact-information': DistributorContactInformation;
      'distributor.faq-article-content': DistributorFaqArticleContent;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
