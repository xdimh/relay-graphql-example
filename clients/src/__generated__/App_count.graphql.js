/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type App_count$ref: FragmentReference;
declare export opaque type App_count$fragmentType: App_count$ref;
export type App_count = {|
  +count: ?number,
  +$refType: App_count$ref,
|};
export type App_count$data = App_count;
export type App_count$key = {
  +$data?: App_count$data,
  +$fragmentRefs: App_count$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_count",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "count",
      "storageKey": null
    }
  ],
  "type": "RootQueryType"
};
// prettier-ignore
(node/*: any*/).hash = '1fb755e7d3024ed6b88a33726d9d54f2';

module.exports = node;
