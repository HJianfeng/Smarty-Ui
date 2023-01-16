import { componentSizes } from '../../utils';
import type Tag from './tag.vue';
import '../../style/tag.scss';

import type { ExtractPropTypes } from 'vue';

export const tagProps = {
  closable: Boolean,
  type: {
    type: String,
    values: ['success', 'info', 'warning', 'danger', ''],
    default: ''
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    values: componentSizes,
    default: ''
  },
  effect: {
    type: String,
    values: ['dark', 'light', 'plain'],
    default: 'light'
  },
  round: Boolean
} as const;
export type TagProps = ExtractPropTypes<typeof tagProps>;

export const tagEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent
};
export type TagEmits = typeof tagEmits;

export type TagInstance = InstanceType<typeof Tag>;
