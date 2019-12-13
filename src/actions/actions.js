/*
 * action types
 */

export const FROM_TRANSITION = "FROM_TRANSITION";

/*
 * action creators
 */

export function fromTransition(id) {
  return { type: FROM_TRANSITION, id };
}
