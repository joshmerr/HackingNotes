#include <stdio.h>
#include <unistd.h>

void special(){
	printf("this is the special function\n");
	printf("you did this, friend!\n");
}

void normal(){
	printf("normal func\n");
}

void other()
{
    printf("why is this here?");
}

int main(int argc, char **argv)
{
    volatile int (*new_ptr) () = normal;
    char buffer[14];
    gets(buffer);
    new_ptr();
}

