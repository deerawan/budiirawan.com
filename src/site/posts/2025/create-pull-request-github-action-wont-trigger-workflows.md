---
title: 'Creating pull request with GitHub Actions won't trigger workflows'
date: 2025-01-17
category: 'github'
tags: ['github', 'github-action', 'pull-request']
---

Today, I learned that creating a pull request with GitHub Actions won't trigger `on: pull_request` workflows by default. According to [Github doc](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/triggering-a-workflow#triggering-a-workflow-from-a-workflow), this behavior is intentional to prevent recursive workflow runs.

![github-action-workflow-trigger-issue](/images/2025/2025-github-action-create-pr-issue.jpg)

To solve the issue, this [repo](https://github.com/peter-evans/create-pull-request/blob/main/docs/concepts-guidelines.md#triggering-further-workflow-runs) list all possible solutions. Personally, I prefer to use the Github App token approach as it's more secure.

Here's how you can set up the Github App token:
1. Follow this [step](https://github.com/peter-evans/create-pull-request/blob/main/docs/concepts-guidelines.md#authenticating-with-github-app-generated-tokens) to create a [Github App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app#registering-a-github-app) token with the necessary permissions.
2. Add the Github App token to the workflow file.

Since I use Github CLI, I configured it as below:

```yaml
steps:
  - uses: actions/create-github-app-token@v1
    id: generate-token # Generate the Github App token based on given app-id and private-key
    with:
      app-id: ${{ secrets.APP_ID }}
      private-key: ${{ secrets.APP_PRIVATE_KEY }}

  - name: Create backport PR
    env:
      GITHUB_TOKEN: ${{ steps.generate-token.outputs.token }} # Use the Github App token
    run: |
      gh pr create \
        --base main \
        --head $BACKPORT_BRANCH \
        --title "[Backport] ${PR_TITLE}" \
        --body "Backport for ${PR_URL}" \
        --label "backport ↔️"

```

Here is the screenshot after using Github App token

![github action PR triggers workflow](/images/2025/2025-github-action-create-pr-solved.jpg)
