import { Serializer as rwerSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mu7-rwer';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(rwerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
