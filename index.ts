import * as github from "@pulumi/github";
import * as pulumi from "@pulumi/pulumi";

const repositoryId = "branch-strategy";

const mainBranchProtection = new github.BranchProtection("main", {
  repositoryId,
  pattern: "main",
  requiredPullRequestReviews: [
    {
      requiredApprovingReviewCount: 1,
      requireCodeOwnerReviews: true,
    },
  ],
  requireConversationResolution: true,
  allowsForcePushes: false,
  allowsDeletions: false,
});

export const branchName = mainBranchProtection.pattern;
