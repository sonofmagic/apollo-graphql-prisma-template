/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Article: { // root type
    comments?: Array<NexusGenRootTypes['Comment'] | null> | null; // [Comment]
    content?: string | null; // String
    id?: number | null; // Int
    tags?: Array<NexusGenRootTypes['Tag'] | null> | null; // [Tag]
    title?: string | null; // String
    topic?: NexusGenRootTypes['Topic'] | null; // Topic
    user?: NexusGenRootTypes['User'] | null; // User
    userId?: number | null; // Int
  }
  Comment: { // root type
    article?: NexusGenRootTypes['Article'] | null; // Article
    articleId?: number | null; // Int
    content?: string | null; // String
    id?: number | null; // Int
    user?: NexusGenRootTypes['User'] | null; // User
    userId?: number | null; // Int
  }
  Query: {};
  Tag: { // root type
    articles?: Array<NexusGenRootTypes['Article'] | null> | null; // [Article]
    id?: number | null; // Int
    name?: string | null; // String
  }
  Topic: { // root type
    article?: NexusGenRootTypes['Article'] | null; // Article
    articleId?: number | null; // Int
    id?: number | null; // Int
    name?: string | null; // String
  }
  User: { // root type
    articles?: Array<NexusGenRootTypes['Article'] | null> | null; // [Article]
    id?: number | null; // Int
    name?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Article: { // field return type
    comments: Array<NexusGenRootTypes['Comment'] | null> | null; // [Comment]
    content: string | null; // String
    id: number | null; // Int
    tags: Array<NexusGenRootTypes['Tag'] | null> | null; // [Tag]
    title: string | null; // String
    topic: NexusGenRootTypes['Topic'] | null; // Topic
    user: NexusGenRootTypes['User'] | null; // User
    userId: number | null; // Int
  }
  Comment: { // field return type
    article: NexusGenRootTypes['Article'] | null; // Article
    articleId: number | null; // Int
    content: string | null; // String
    id: number | null; // Int
    user: NexusGenRootTypes['User'] | null; // User
    userId: number | null; // Int
  }
  Query: { // field return type
    allUsers: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  Tag: { // field return type
    articles: Array<NexusGenRootTypes['Article'] | null> | null; // [Article]
    id: number | null; // Int
    name: string | null; // String
  }
  Topic: { // field return type
    article: NexusGenRootTypes['Article'] | null; // Article
    articleId: number | null; // Int
    id: number | null; // Int
    name: string | null; // String
  }
  User: { // field return type
    articles: Array<NexusGenRootTypes['Article'] | null> | null; // [Article]
    comments: Array<NexusGenRootTypes['Comment'] | null> | null; // [Comment]
    id: number | null; // Int
    name: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Article: { // field return type name
    comments: 'Comment'
    content: 'String'
    id: 'Int'
    tags: 'Tag'
    title: 'String'
    topic: 'Topic'
    user: 'User'
    userId: 'Int'
  }
  Comment: { // field return type name
    article: 'Article'
    articleId: 'Int'
    content: 'String'
    id: 'Int'
    user: 'User'
    userId: 'Int'
  }
  Query: { // field return type name
    allUsers: 'User'
  }
  Tag: { // field return type name
    articles: 'Article'
    id: 'Int'
    name: 'String'
  }
  Topic: { // field return type name
    article: 'Article'
    articleId: 'Int'
    id: 'Int'
    name: 'String'
  }
  User: { // field return type name
    articles: 'Article'
    comments: 'Comment'
    id: 'Int'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}