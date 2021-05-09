using System;
using System.Linq;

namespace CodingTests
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine(Reverse("oi, meu nome é kaique"));
            
        }



        public static string Reverse(string str)
        {
            string reversed = string.Empty;

            for(int i = str.Length - 1; i >= 0 ; i--)
                reversed = reversed + str[i];

            return reversed;
        }
    }
}
