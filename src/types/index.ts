export enum CardTypeEnum {
  ALL = 'ALL',
  TASKS = 'TASKS',
  CORSES = 'CORSES',
}

export type CardType =
  | CardTypeEnum.ALL
  | CardTypeEnum.TASKS
  | CardTypeEnum.CORSES;

export interface ICard {
  card_id: number;
  reviewer_id: number;
  name: string;
  reward: number;
  photo_required: boolean;
  video_required: boolean;
  schedule: Array<boolean> | null;
  period_start: string | null;
  period_stop: string | null;
  type: CardType;
  description: string | null;
  every_month: Array<number> | null;
}

export interface IAddCardProps {
  reviewer_id: number;
  name: string;
  reward: number;
  video_required: boolean;
  period_start: string | null;
  period_stop: string | null;
  type: CardType;
  description: string | null;
  every_month: Array<number> | null;
}
