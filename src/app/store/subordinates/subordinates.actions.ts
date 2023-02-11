import { createAction, props } from "@ngrx/store";
import { ISubordinates } from "src/app/modules/hierarchies-details/interfaces/subordinates.interface";

export const getSubordinates = createAction(
    "[Subordinates Resolver] Get Subordinates"
);

export const subordinatesLoaded = createAction(
    "[Load subordinates Effect] Subordinates Loaded",
    props<{subordinates: ISubordinates[]}>()
);