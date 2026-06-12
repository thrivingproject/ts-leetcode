#include <ctype.h>
#include <stdio.h>
#include <string.h>

char *reverseOnlyLetters(char *s) {
    int l = 0, r = strlen(s) - 1;
    char lc, rc;

    while (l < r) {
        lc = s[l];
        rc = s[r];

        while (!isalpha(lc) && l < strlen(s) - 1) {
            lc = s[++l];
        }

        while (!isalpha(rc) && r > 0) {
            rc = s[--r];
        }

        if (l < r && isalpha(lc) && isalpha(rc)) {
            char tmp = lc;
            s[l] = rc;
            s[r] = tmp;
        }
        l++;
        r--;
    }
    return s;
}

int main(void) {
    char s[] = "?6C40E";
    printf("%s", reverseOnlyLetters(s));
}
