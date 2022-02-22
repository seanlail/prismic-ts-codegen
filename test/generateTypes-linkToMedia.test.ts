import test from "ava";
import * as prismicM from "@prismicio/mock";

import { macroBasicFieldType } from "./__testutils__/macroBasicFieldType";
import { macroBasicFieldDocs } from "./__testutils__/macroBasicFieldDocs";

test(
	"correctly typed",
	macroBasicFieldType,
	(t) => prismicM.model.linkToMedia({ seed: t.title }),
	"prismicT.LinkToMediaField",
);

test("correctly documented", macroBasicFieldDocs, (t) =>
	prismicM.model.linkToMedia({ seed: t.title }),
);