import * as MaterialButtons from './material';
import * as SemanticButtons from './semantic';
import * as ReactstrapButtons from './reactstrap';
import { IDefaultProps } from 'types/default-props';

export { MaterialButtons, SemanticButtons, ReactstrapButtons };

export interface IBaseButtonProps extends IDefaultProps {
  /**
   * [optional] Identifier to pass to onClick callback
   */
  id?: string;
  /**
   * [required] Callback when user clicks button
   *
   * `id` or `null` will be passed to `onClick`
   */
  onClick: (id?: string) => void;
  /**
   * [optional] Disables button interactions and applies styling
   * when `true`
   */
  disabled?: boolean;
  /**
   * [optional] Enforces basic styling (used by SecondaryButton)
   */
  basic?: boolean;
}
